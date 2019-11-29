import React from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import mod from "./Location.module.sass";

const state = { center: [53.915727, 27.425797], zoom: 12, ZoomControl: true };

const Location = props => {
  return (
    <div className={mod.location}>
      <YMaps>
        <Map defaultState={state} width="100%" height="100%">
          <ZoomControl
            options={{
              size: "small",
              zoomDuration: 1000
            }}
          />
          <Placemark
            defaultGeometry={state.center}
            width="100%"
            height="100%"
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default Location;
