import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { Email } from "@mui/icons-material";

function DownloadResume() {
  return (
    <div id="DownloadResume">
      <div>
        <a href="https://github.com/workrahul22" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/workrahul22/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:work.rahul22@gmail.com" target="_blank"><Email /></a>
      </div>
    </div>
  );
}

export default DownloadResume;