import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { uploadPrescriptionImage } from "../../../store/actions/PrescriptionAction";
import { useNavigate } from "react-router-dom";
function UploadPrescriptionImage({ prescriptionId }) {

    const [image_file, setImageFile] = useState(null);
    const [image_preview, setImagePreview] = useState('');

    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];

        setImagePreview(image_as_base64);
        setImageFile(image_as_files);

    }

    const handleSubmitFile = () => {

        if (image_file !== null) {

            let formData = new FormData();
            formData.append('file', image_file);
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile

            dispatch(uploadPrescriptionImage(formData, prescriptionId));
            nav('/');
        }
    }
    return (
        <div>
        {/* image preview */}
        <img src={image_preview} alt="image preview"/>

        {/* image input field */}
        <input
            type="file"
            onChange={handleImagePreview}
        />
        <label>Upload file</label>
        <input type="submit" onClick={handleSubmitFile} value="Submit"/>
    </div>

    )
}
export default UploadPrescriptionImage;