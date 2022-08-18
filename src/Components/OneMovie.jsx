import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const OneMovie = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = [{ id: id, title: "Some movie", runtime: 150 }];

  console.log(id);

  return (
    <>
      <h2>
        Movie:{movie.title}
        {movie.id}
      </h2>
      <table className="table table-compact table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Title:</strong>
            </td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Runtime:</strong>
            </td>
            <td>{movie.runtime}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
