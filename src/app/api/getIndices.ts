"use server";

export default async function getIndices() {
  const response = await fetch("https://icanhazdadjoke.com/");
  const data = await response.json();
  console.log(data);
}
