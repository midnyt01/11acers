const express = require("express");
const fetchCustomer = require("../../middleware/fetchcustomer");
const {
  httpCreateCustomerAccount,
  httpLoginCustomer,
  httpAddCustomerAddress,
  httpGetAllCustomerAddressesById,
  httpDeleteCustomerAddressById,
  httpGetAllBlogs,
  httpGetBlogById,
  httpGetAllCaseStudies,
  httpGetCaseStudyById,
  httpCreateBlogPostByCustomer,
  httpCommentOnBlogPost,
  httpPostContactMe,
  httpGetAllCommentsOnBlog,
  httpReplyOnBlogComment,
  httpGetAllRepliesOnBlogComment,
  httpGetTestitmonials,
  httpGetAllCurrentProperties,
  httpGetAllRentalProperties,
} = require("./customer.controller");

const customerRouter = express.Router();

//auth
customerRouter.post("/createaccount", httpCreateCustomerAccount);
customerRouter.post("/login", httpLoginCustomer);

//address
customerRouter.post("/address", fetchCustomer, httpAddCustomerAddress);
customerRouter.get("/address", fetchCustomer, httpGetAllCustomerAddressesById);
customerRouter.delete("/address/:id", fetchCustomer, httpDeleteCustomerAddressById)

//blogs and case studies
customerRouter.post("blogs", httpCreateBlogPostByCustomer)

customerRouter.get("/blogs", httpGetAllBlogs);
customerRouter.get("/blogs/:id", httpGetBlogById);
customerRouter.post("/blogs/comments", httpCommentOnBlogPost);
customerRouter.get("/blogs/comments/:id", httpGetAllCommentsOnBlog);
customerRouter.get("/blogs/comments/replies/:id", httpGetAllRepliesOnBlogComment);
customerRouter.post("/blogs/comments/replies", httpReplyOnBlogComment);

customerRouter.get("/casestudies", httpGetAllCaseStudies)
customerRouter.get("/casestudies/:id", httpGetCaseStudyById)

customerRouter.get("/testimonials", httpGetTestitmonials)

//leads
customerRouter.post("/contactme", httpPostContactMe)

//property

customerRouter.get("/current-property", httpGetAllCurrentProperties);
customerRouter.get("/rental-property", httpGetAllRentalProperties);

module.exports = customerRouter;
