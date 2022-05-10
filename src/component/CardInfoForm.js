import React, { useState } from 'react';
import MultiRangeSlider from "./MultiRangeSlider";
import { UserContext } from '../App';

// function field
function convertURL(infile) {
    var URL = window.webkitURL || window.URL;
    var url = URL.createObjectURL(infile.target.files[0]);
    return url;
}

function CardInfoForm() {
    return (

        <form>

            <div class="input-group mb-3">
                <label class="input-group-text"> Photo </label>
                <UserContext.Consumer>
                    {value => <input type="file" class="form-control" onChange={e => value.setImg_url(convertURL(e))} />}
                </UserContext.Consumer>

            </div>

            <div class="input-group mb-3">
                <label class="input-group-text"> Name </label>
                <input type="text" id="name" class="form-control" />
            </div>

            <div class="input-group mb-3">
                <div class="form-check">
                    <input class="form-check-input"
                        type="radio"
                        name='sex' />
                    <label class="form-check-label">
                        Male </label> </div>

                <div class="form-check">
                    <input class="form-check-input"
                        type="radio"
                        name='sex' />
                    <label class="form-check-label">
                        Female </label> </div>

                <div class="form-check">
                    <input class="form-check-input"
                        type="radio"
                        name='sex' />
                    <label class="form-check-label">
                        Other </label> </div> </div>


            <div class="input-group mb-3">
                <div class="form-check">
                    <input class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault" />
                    <label class="form-check-label"
                        for="flexCheckDefault">
                        Chinese </label> </div> <div class="form-check">
                    <input class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked" />
                    <label class="form-check-label"
                        for="flexCheckChecked">
                        English </label> </div> <div class="form-check">
                    <input class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked" />
                    <label class="form-check-label"
                        for="flexCheckChecked">
                        Japanese </label> </div> </div>

            <div class="input-group mb-3">

                <label class="input-group-text"> PlayTime</label><div class="form-control">
                    <div class="row d-flex align-items-center">
                        <div class="col-10">
                            <MultiRangeSlider min={0} max={24} onChange={({ min, max }) => console.log('min = ${min}, max = ${max}')} />
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-light">+</button>
                        </div>
                    </div>

                </div>



            </div>

            <div class="input-group">
                <label class="input-group-text"> Note </label> <textarea class="form-control"> </textarea> </div> </form>
    );
}
export default CardInfoForm;