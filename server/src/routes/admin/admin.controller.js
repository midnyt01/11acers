// const { SortSellerOrders } = require("../../helper-function/helper-functions");
const {
  createAdminAccount,
  loginInAdmin,
  getAllCustomers,
  postBlog,
  getAllBlogs,
  postCaseStudy,
  getAllCaseStudies,
  getAllLeadsInfo,
  updateBlog,
  deleteBlogById,
  getBlogById,
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudyById,
  getAllCurrentProperty,
  addNewCurrentProperty,
  removeCurrentProperty,
  getAllRentalProperty,
  addNewRentalProperty,
  removeRentalProperty,
} = require("../../models/admin.model");

async function httpCreateAdminAccount(req, res) {
  await createAdminAccount(req.body, function (err, data) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  });
}

async function httpLoginAdmin(req, res) {
  await loginInAdmin(req.body, function (err, data) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.json(data);
    }
  });
}

//blog
async function httpPostBlog(req, res) {
  await postBlog(req.body, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpGetBlogById (req, res) {
  let blogId = req.params.id
  await getBlogById(blogId, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpGetAllBlogs (req, res) {
  await getAllBlogs(function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}
async function httpUpdateBlog(req, res) {
  let blogId = req.params.id;
  await updateBlog(blogId, req.body, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpDeleteBlog(req, res) {
  let blogId = req.params.id
  await deleteBlogById(blogId, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data);
    }
  })
}

async function httpPostCaseStudy(req, res) {
  await postCaseStudy(req.body, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpGetCaseStudyById (req, res) {
  let casestudyId = req.params.id
  await getCaseStudyById(casestudyId, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpGetAllCaseStudies (req, res) {
  await getAllCaseStudies(function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}
async function httpUpdateCaseStudy(req, res) {
  let casestudyId = req.params.id;
  await updateCaseStudy(casestudyId, req.body, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpDeleteCaseStudy(req, res) {
  let casestudyId = req.params.id
  await deleteCaseStudyById(casestudyId, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data);
    }
  })
}

//customers

async function httpGetAllCustomers (req, res) {
  await getAllCustomers(function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}
async function httpGetAllLeads (req, res) {
  await getAllLeadsInfo(function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

//property

async function httpGetAllCurrentProperties (req, res) {
  await getAllCurrentProperty(function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpPostCurrentProperty (req, res) {
  let propertyDetails = req.body;
  await addNewCurrentProperty(propertyDetails, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpRemoveCurrentProperty (req, res) {
  let PropertyId = req.params.id;
  await removeCurrentProperty(PropertyId, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpGetAllRentalProperties (req, res) {
  await getAllRentalProperty(function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpPostRentalProperty (req, res) {
  let propertyDetails = req.body;
  await addNewRentalProperty(propertyDetails, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}

async function httpRemoveRentalProperty (req, res) {
  let PropertyId = req.params.id;
  await removeRentalProperty(PropertyId, function(err, data) {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(data)
    }
  })
}


async function httpGetImageUrl (req, res) {
  const url = req.file.path;
  console.log(url) // The URL of the uploaded image
  res.json({ url: url });
}









module.exports = {
  httpCreateAdminAccount,
  httpLoginAdmin,
  
  httpPostBlog,
  httpGetBlogById,
  httpGetAllBlogs,
  httpUpdateBlog,
  httpDeleteBlog,

  httpPostCaseStudy,
  httpGetCaseStudyById,
  httpGetAllCaseStudies,
  httpUpdateCaseStudy,
  httpDeleteCaseStudy,

  httpGetAllCustomers,
  httpGetAllLeads,

  httpGetAllCurrentProperties,
  httpPostCurrentProperty,
  httpRemoveCurrentProperty,

  httpGetAllRentalProperties,
  httpPostRentalProperty,
  httpRemoveRentalProperty,

  httpGetImageUrl,
};
