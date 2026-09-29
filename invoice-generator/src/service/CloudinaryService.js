import axios from "axios";

export const uploadInvoiceThumbnail = async(imageData) => {
    const formData = new FormData();
    formData.append('file', imageData);
    formData.append('upload_preset', 'invoices-thumbnail');
    formData.append('cloud_name',"gyxezchs");

    const response = await axios.post(`https://api.cloudinary.com/v1_1/gyxezchs/image/upload`, formData );

    return response.data.secure_url;
}