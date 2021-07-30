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

// The following example creates five accessible and
// focusable markers.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 12,
      center: { lat: 13.8146038, lng: 100.5960651 }
    }
  );

  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops: [google.maps.LatLngLiteral, string, string][] = [
    [
      { lat: 13.8146038, lng: 100.5960651 },
      "เจราชาอ๊อกซิเย่น",
      "https://www.google.com/maps/place/%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B9%8A%E0%B8%AD%E0%B8%81%E0%B8%8B%E0%B8%B4%E0%B9%80%E0%B8%A2%E0%B9%88%E0%B8%99/@13.8147619,100.5940235,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29dbe4098e41d:0xcedc6ec317efacea!8m2!3d13.814762!4d100.5962149"
    ]
  ];

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, Name, googleMapUrl], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${Name}. `,
      label: `${Name}`,
      optimized: false
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

export { initMap };
