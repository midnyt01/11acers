const express = require("express");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const fetchAdmin = require("../../middleware/fetchadmin");

const {
  httpCreateAdminAccount,
  httpLoginAdmin,
  httpGetAllCustomers,
  httpPostBlog,
  httpGetAllBlogs,
  httpPostCaseStudy,
  httpGetAllCaseStudies,
  httpGetAllLeads,
  httpUpdateBlog,
  httpDeleteBlog,
  httpGetBlogById,
  httpGetCaseStudyById,
  httpUpdateCaseStudy,
  httpDeleteCaseStudy,
  httpGetAllCurrentProperties,
  httpPostCurrentProperty,
  httpRemoveCurrentProperty,
  httpGetImageUrl,
  httpGetAllRentalProperties,
  httpPostRentalProperty,
  httpRemoveRentalProperty,
} = require("./admin.controller");

const adminRouter = express.Router();


cloudinary.config({
  cloud_name: "dibecry4e",
  api_key: "284649593466319",
  api_secret: "bDUs5ALNmdeQ_r71lQfFZBoA_-s"
});

// Configure the multer middleware with the Cloudinary storage engine
  const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png', 'gif']
  }
});
const upload = multer({ storage: storage });

adminRouter.post("/createadmin", httpCreateAdminAccount);
adminRouter.post("/login", httpLoginAdmin);

//blog post

adminRouter.post("/blogcoverimage", upload.single('file'), httpGetImageUrl);

adminRouter.post("/blogs", fetchAdmin, httpPostBlog);
adminRouter.get("/blogs", fetchAdmin, httpGetAllBlogs);
adminRouter.get("/blogs/:id", fetchAdmin, httpGetBlogById);
adminRouter.put("/blogs/:id", fetchAdmin, httpUpdateBlog);
adminRouter.put("/delete-blog/:id", fetchAdmin, httpDeleteBlog);

//case study
adminRouter.post("/casecoverimage", upload.single('file'), httpGetImageUrl);
adminRouter.post("/casestudies", fetchAdmin, httpPostCaseStudy);
adminRouter.get("/casestudies", fetchAdmin, httpGetAllCaseStudies);
adminRouter.get("/casestudies/:id", fetchAdmin, httpGetCaseStudyById);
adminRouter.put("/casestudies/:id", fetchAdmin, httpUpdateCaseStudy);
adminRouter.put("/delete-casestudy/:id", fetchAdmin, httpDeleteCaseStudy);

//propery

adminRouter.post("/current-property-image", upload.single('file'), httpGetImageUrl);
adminRouter.get("/current-property", fetchAdmin, httpGetAllCurrentProperties);
adminRouter.post("/current-property", fetchAdmin, httpPostCurrentProperty);
adminRouter.put("/current-property/:id", fetchAdmin, httpRemoveCurrentProperty);


adminRouter.post("/rental-property-image", upload.single('file'), httpGetImageUrl);
adminRouter.get("/rental-property", fetchAdmin, httpGetAllRentalProperties);
adminRouter.post("/rental-property", fetchAdmin, httpPostRentalProperty);
adminRouter.put("/rental-property/:id", fetchAdmin, httpRemoveRentalProperty);

    
//customers 

adminRouter.get("/customers", fetchAdmin, httpGetAllCustomers)
adminRouter.get("/leads", fetchAdmin, httpGetAllLeads)

module.exports = adminRouter;
