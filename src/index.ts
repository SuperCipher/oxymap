/*
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";
import * as Suppliers from "./supplierList";
// The following example creates five accessible and
// focusable markers.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 10,
      center: { lat: 13.8146038, lng: 100.5960651 }
    }
  );
  const a = Suppliers.suppliers

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  a.forEach(([position, name, address, phoneNumber, placeId, details], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${name}`,
      label: `${name}`,
      optimized: false
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      const contentString =
        `<h1>${name}</h1>` +
        '<div>' +
          `<p>${address}</p>`+
          '<h3>'+
            `<a href="tel:${phoneNumber}">${phoneNumber}</a>` +
          '</h3>'+
          '<h3>'+
            `<a href="https://www.google.com/maps/search/?api=1&query=${name}&query_place_id=${placeId}" target="_blank" rel="noopener noreferrer">` +
            `เปิดแผนที่ในกูเกิลแมพ</a>`+
          '</h3>'+
        "</div>";

      infoWindow.setContent(contentString);
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

console.info('bug report at https://github.com/SuperCipher/oxymap/issues')

export { initMap };
