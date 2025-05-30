const {FlightService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');

async function createFlight(req,res){
  try {
    const flight=await FlightService.createFlight({
      flightNumber:req.body.flightNumber,
      airplaneId:req.body.airplaneId,
      departureId:req.body.departureId,
      arrivalId:req.body.arrivalId,
      departureTime:req.body.departureTime,
      arrivalTime:req.body.arrivalTime,
      price:req.body.price,
      boardingGate:req.body.boardingGate,
      totalSeats:req.body.totalSeats
    });
    SuccessResponse.data=flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAllFlights(req,res){
  try{
    const flights=await FlightService.getAllFlights(req.body);
    SuccessResponse.data=flights;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getFlight(req,res){
  try {
   const flight=await FlightService.getFlight(req.params.id);
   SuccessResponse.data=flight;
   return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
   ErrorResponse.error=error;
   return res.status(error.statusCode).json(ErrorResponse);
 }
}

async function updateSeats(req,res){
  try {
    const response=await FlightService.updateSeats({
      flightId:req.params.id,
      seats:req.body.seats,
      dec:req.body.dec
    })
    SuccessResponse.data=response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error=error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports={
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats
} 