import getIndices from "../app/api/getIndices";

export default function Indices(getIndices: string) {
  return (
    <div>
      <h1>Indices</h1>
      <span>{getIndices}</span>
    </div>
  );
}
