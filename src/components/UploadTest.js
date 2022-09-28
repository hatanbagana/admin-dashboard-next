import React, { useState } from "react";

import { uploadImage, getImage } from "../services/TableService";

export default function UploadTest() {
  const [ImageUpload, setImageUpload] = useState(null);
  return (
    <div>
      <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
      <button onClick={() => uploadImage(ImageUpload)}>Upload Image</button>
      <button onClick={getImage}>Get Image</button>
    </div>
  );
}
