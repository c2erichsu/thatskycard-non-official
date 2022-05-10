import React, { useCallback, useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import "./multiRangeSlider.css";

MultiRangeSlider.propTypes = {
   min: PropTypes.number.isRequired,
   max: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired
};

function MultiRangeSlider({ min, max, onChange }) {
   const [minVal, setMinVal] = useState(min);
   const [maxVal, setMaxVal] = useState(max);
   const minValRef = useRef(min);
   const maxValRef = useRef(max);
   const range = useRef(null);

   // Convert to percentage
   const getPercent = useCallback(
      (value) => Math.round(((value - min) / (max - min)) * 100),
      [min, max]
   );

   // Set width of the range to decrease from the left side
   useEffect(() => {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current);

      if (range.current) {
         range.current.style.left = `${minPercent}%`;
         range.current.style.width = `${maxPercent - minPercent}%`;
      }
   }, [minVal, getPercent]);

   // Set width of the range to decrease from the right side
   useEffect(() => {
      const minPercent = getPercent(minValRef.current);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
         range.current.style.width = `${(maxPercent - minPercent)}%`;
      }
   }, [maxVal, getPercent]);

   // Get min and max values when their state changes
   useEffect(() => {
      onChange({ min: minVal, max: maxVal });
   }, [minVal, maxVal, onChange]);

   return (
      <div class="row">
         <div class="col-8">
            <div class="multiSlider">
               <input
                  type="range"
                  min={min}
                  max={max}
                  value={minVal}
                  onChange={(event) => {
                     const value = Math.min(Number(event.target.value), maxVal - 1);
                     setMinVal(value);
                     minValRef.current = value;
                  }}
                  class="thumb_left"
               />

               <input
                  type="range"
                  min={min}
                  max={max}
                  value={maxVal}
                  onChange={(event) => {
                     const value = Math.max(Number(event.target.value), minVal + 1);
                     setMaxVal(value);
                     maxValRef.current = value;
                  }}
                  class="thumb_right"
               />

               <div class="slider">
                  <div class="slider_track" />
                  <div ref={range} class="slider_range" />
               </div>

            </div>
         </div>
         <div class="col-4">
            {minVal}點 - {maxVal}點
         </div>
      </div>
   );
};



export default MultiRangeSlider;
