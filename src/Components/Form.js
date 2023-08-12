import React from "react";
import { GrSend } from 'react-icons/gr';

export default function Form() {
  return (
    <>
      <form className="Form-section">
        <div className="form-group mb-3">
          <label for="namaUser">Username</label>
          <input type="text" required placeholder="Masukan Email Anda" className="form-control"/>
        </div>
        <div className="form-group mb-3">Example
          <label>Pesan Anda</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Masukan Pesan Anda"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-light">
            <GrSend className="btn-size" />
          </button>
        </div>
      </form>
    </>
  );
}
