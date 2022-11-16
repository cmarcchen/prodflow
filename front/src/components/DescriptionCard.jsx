import React, { useEffect, useState } from "react";
import { matchPath, Outlet, useLocation, useNavigate } from "react-router-dom";
import { findLine } from "../data/data-utils";
import { DefaultButton } from "./Default/DefaultButton";

export default function DescriptionCard({}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const match = matchPath("production/:productionId/*", pathname);

  const getLineNumber = match.params.productionId;
  const [line, setLine] = useState({});

  useEffect(() => {
    findLine(getLineNumber).then((line) => setLine(line));
  }, []);

  return (
    <div className=" m-auto  w-3/4 overflow-hidden bg-white shadow sm:rounded-lg ">
      <div className="container flex px-4 py-5 sm:px-6">
        <div className="container">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Line Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Line details and status.
          </p>
        </div>

        <DefaultButton
          color="btn--primary"
          type="btn"
          onClick={() => navigate("edit")}
        >
          Edit
        </DefaultButton>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Line Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {line.lineNumber}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Line Category</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {line.lineCategory}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {line.lineStatus}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {line.lineLocation}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
      <Outlet />
    </div>
  );
}
