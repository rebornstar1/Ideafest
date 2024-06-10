import express from "express";
import Testimonial from "../models/Testimonialmodel.js";

export const DashTestimonial = async(req,res,next) => {
    console.log(req.body);
    // Data yahapar successfully aa raha hai ab
    const {Title,Description,yname,oname} = req.body;
    const newTestimonial = await Testimonial.create({Title,Description,yname,oname});
    try
    {
       await newTestimonial.validate();
       return res.status(201).json("Testimonial Added Successfully")
    } 
    catch(error)
    {
       next(error);
    }
}

export const SeeFeedBack = async(req,res,next) => {
    try
    {
      const allfeedback = await Testimonial.find();
      res.status(201).json(allfeedback);
    }
     catch(error)
    {

    }
}