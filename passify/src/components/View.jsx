import React, { useContext, useEffect, useRef, useState } from "react";
import passContext from "../context/passwords/passContext";
import PassItem from "./passItem";
import "../style.css";

function View() {
  const context = useContext(passContext);
  const { p, getPass,EditPass } = context;

  useEffect(() => {
    getPass();
  }, []);

  const [pass, setPass] = useState({ id:"", ename: "", epassword: "", etag: "" });
  const ref = useRef(null);
  const closeRef = useRef(null);

  const updatePass = (currentPass) => {
    console.log("clicked");
    setPass({
      id: currentPass._id,
      ename: currentPass.name,
      epassword: currentPass.password,
      etag: currentPass.tag,
    });
    const modalElement = ref.current;
    const modal = new window.bootstrap.Modal(modalElement);
    modal.show();
  };

  const saveChanges = async (e) => {
    console.log("updating changes.....",pass);
    EditPass(pass.id, pass.name,pass.password,pass.tag);
    closeRef.current.click();
    e.preventDefault();
  };

  const onChange = (event) => {
    setPass({ ...pass, [event.target.name]: event.target.value });
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        ref={ref}  // Ref to target modal element
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit Password</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p><b>Enter details</b></p>
              <form>
                <div className="form-group">
                  <label htmlFor="ename">Name</label>
                  <input
                    style ={{width:'100%'}}
                    type="text"
                    className="form-control " 
                    id="ename"
                    name="ename"
                    value={pass.ename}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="epassword">Password</label>
                  <input
                   style ={{width:'100%'}}
                    type="text"
                    className="form-control"
                    id="epassword"
                    name="epassword"
                    value={pass.epassword}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="etag">Tag</label>
                  <input
                   style ={{width:'100%'}}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={pass.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeRef}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={saveChanges}  >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Displaying all passwords */}
      <div id="allPasswords">
        {p.map((e) => (
          <PassItem key={e._id} updatePass={updatePass} e={e} />
        ))}
      </div>
    </>
  );
}

export default View;
