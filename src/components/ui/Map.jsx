import React from "react";
import { Button } from "@/components/ui/button";
import "./Map.css"; // Import the CSS file

export default function Map() {
  return (
    <div className="map-container">
      <h2 className="map-title">Our Location</h2>
      <p className="map-description">
        Groupe Scolaire Kinteko is locate at GS Kinteko, Butare, Rwanda.
        Use the map below to find your way to our campus.
      </p>

      {/* Google Map Embed */}
      <div className="map-frame">
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.9739172213525!2d30.20977931429456!3d-1.9637371985800467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4c5c20777db%3A0xd2ef621defe6766f!2sGroupe%20Scolaire%20Kabuga%20Catholique!5e0!3m2!1sen!2srw!4v1712585450000!5m2!1sen!2srw"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Call-to-Action */}
      <Button className="map-button">Get Directions</Button>
    </div>
  );
}
