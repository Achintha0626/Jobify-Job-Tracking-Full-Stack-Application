import Job from '../models/JobModel.js'

import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end developer" },
  { id: nanoid(), company: "google", position: "back-end developer" },
];

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({ jobs });
};



export const createJob = async (req, res) => {
    const job = await Job.create(req.body);
    res.status(201).json({ job });
  
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  
  const job=await Job.findById(id)
  console.log(job);
  if (!job) {
    
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removeJob=await Job.findByIdAndDelete(id)
  
  if (!removeJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
 

  res.status(200).json({ msg: "job deleted",job: removeJob });
};
