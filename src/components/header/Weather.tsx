"use client";

import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getWeather } from "@/api/getWeather";

import type { UserLocationProps } from "@/types";

const queryClient = new QueryClient();

export default function Weather() {
  const [userLocation, setUserLocation] = useState<UserLocationProps>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ latitude, longitude });
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {userLocation.latitude !== null && userLocation.longitude !== null ? (
        <GetWeather
          latitude={userLocation.latitude}
          longitude={userLocation.longitude}
        />
      ) : userLocation.latitude === null ? (
        <span className="flex flex-1 justify-end">
          Give location permission
          <br /> to see the weather
        </span>
      ) : (
        <p className="flex flex-1 justify-end">Loading weather...</p>
      )}
    </QueryClientProvider>
  );
}

export function GetWeather({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const { isPending, isError, data } = getWeather(latitude, longitude);

  if (isPending) {
    return <p>Loading weather...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="flex flex-1 flex-col justify-end space-x-2 text-right capitalize">
      <span>
        {data.name}, {data.sys.country}
      </span>
      <span>
        {data.weather[0].description} {data.main.temp.toFixed(2).split(".")[0]}
        &deg;C
      </span>
    </div>
  );
}
