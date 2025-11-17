import csharp from "/public/svg/skills/csharp.svg";
import dotnetcore from "/public/svg/skills/dotnetcore.svg";
import aspnetmvc from "/public/svg/skills/aspnetmvc.svg";
import sqlserver from "/public/svg/skills/sqlserver.svg";
import azure from "/public/svg/skills/azure.svg";
import reactjs from "/public/svg/skills/react.svg";
import javascript from "/public/svg/skills/javascript.svg";
import html5 from "/public/svg/skills/html.svg";
import css3 from "/public/svg/skills/css.svg";
import nodejs from "/public/svg/skills/nodejs.svg";
import expressjs from "/public/svg/skills/expressjs.svg";
import mongodb from "/public/svg/skills/mongodb.svg";
import git from "/public/svg/skills/git.svg";
import docker from "/public/svg/skills/docker.svg";
import cicd from "/public/svg/skills/cicd.svg";
import agile from "/public/svg/skills/agile.svg";
import restapi from "/public/svg/skills/restapi.svg";
import microservices from "/public/svg/skills/microservices.svg";



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case "c#":
      return csharp;

    case ".net core":
      return dotnetcore;

    case "asp.net mvc":
      return aspnetmvc;

    case "sql server":
      return sqlserver;

    case "azure":
      return azure;

    case "react.js":
      return reactjs;

    case "javascript":
      return javascript;

    case "html5":
      return html5;

    case "css3":
      return css3;

    case "node.js":
      return nodejs;

    case "express.js":
      return expressjs;

    case "mongodb":
      return mongodb;

    case "git":
      return git;

    case "docker":
      return docker;

    case "ci/cd":
      return cicd;

    case "agile":
      return agile;

    case "rest api":
      return restapi;

    case "microservices":
      return microservices;

    default:
      console.warn(`⚠️ No image found for: ${skillID}`);
      return null;
  }
};
