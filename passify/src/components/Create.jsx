import React from "react";
import "../style.css"

function Create() {
   
    return (
        <>
            <div className="createform centre">
                <form>
                    <div class="mb-3">
                        <label htmlFor="name" class="htmlForm-label">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="tag" class="form-label">Tags(optional)</label>
                        <input type="text" class="form-control" id="tag" aria-describedby="emailHelp" />
                    </div>
                    <div className="btns">
                    <button type="submit" class="btn btn-primary">SUBMIT</button>
                    <button class="btn btn-primary">CLEAR</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create