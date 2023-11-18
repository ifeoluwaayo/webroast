import { v2 as cloudinary, TransformationOptions } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const CLOUDINARY_FOLDER_NAME = "website-screenshots/";

export const handleGetCloudinaryResource = (publicId: string) => {
  return cloudinary.api.resource(publicId, {
    resource_type: "image",
    type: "upload",
  });
};

export const handleGetCloudinaryUploads = (): Promise<any> => {
  return cloudinary.api.resources({
    type: "upload",
    prefix: CLOUDINARY_FOLDER_NAME,
    resource_type: "image",
  });
};

export const handleCloudinaryUpload = (resource: {
  path: string;
  transformation?: TransformationOptions;
  publicId?: string;
  folder?: boolean;
}) => {
  return cloudinary.uploader.upload(resource.path, {
    // Folder to store image in
    // folder: resource.folder ? CLOUDINARY_FOLDER_NAME : null,
    // Public id of image.
    public_id: resource.publicId,
    // Type of resource
    resource_type: "auto",
    // Transformation to apply to the video
    transformation: resource.transformation,
  });
};

export const handleCloudinaryDelete = (ids: string[]) => {
  return cloudinary.api.delete_resources(ids, {
    resource_type: "image",
  });
};
