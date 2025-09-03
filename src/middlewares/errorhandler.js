//cerntralized error handling

const errorHandling = (err, _req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: 500,
    message: "somethinh went wrong",
    error: err.message,
  });
};

export default errorHandling;
