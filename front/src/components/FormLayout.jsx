import { DefaultButton } from "./Default/DefaultButton";
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import { OptionsInput } from "./Form/OptionsInput";
import { TextInput } from "./Form/TextInput";
import { useEffect, useState } from "react";
import { camelCase } from "lodash";
import { findLine } from "../data/data-utils";

const categoryOptions = ["", "Injectables", "Tablets", "Capsules"];
const statusOptions = ["", "In-use", "In Maintenance", "Stop"];
const locationOptions = ["", "Maisons-Alfort", "Vitry-sur-Seine", "Compiegne"];

export default function FormLayout() {
  // find the lineNumber as foundLIne
  const { pathname } = useLocation();
  const match = matchPath("production/:productionId/*", pathname);
  const getLineNumber = match.params.productionId;

  const navigate = useNavigate();
  const [line, setLine] = useState({});

  useEffect(() => {
    findLine(getLineNumber).then((line) => {
      if (!line) {
        setLine({
          lineNumber: "",
          lineCategory: "",
          lineStatus: "",
          lineLocation: "",
        });
        return;
      }
      setLine(line);
    });
  }, []);

  const handleChange = (e) => {
    const key = camelCase(e.target.id);
    const { value } = e.target;

    setLine({ ...line, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/production-lines", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(line),
    });
    // const data = await response.json();

    navigate("..");
    navigate(0);
  };

  return (
    <>
      <div className="mt-10 h-full md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-3 md:mt-0">
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <TextInput
                    id="line-number"
                    label="Line Number"
                    onChange={handleChange}
                    value={line.lineNumber}
                  />

                  <OptionsInput
                    id="line-category"
                    label="Line Category"
                    options={categoryOptions}
                    onChange={handleChange}
                    value={line.lineCategory}
                  />
                  <OptionsInput
                    id="line-status"
                    label="Line Status"
                    options={statusOptions}
                    onChange={handleChange}
                    value={line.lineStatus}
                  />
                  <OptionsInput
                    id="line-location"
                    label="Line Location"
                    options={locationOptions}
                    onChange={handleChange}
                    value={line.lineLocation}
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6">
                <DefaultButton
                  type="button"
                  color="btn--red"
                  onClick={() => navigate("..")}
                >
                  Cancel
                </DefaultButton>
                <DefaultButton type="submit" color="btn--primary">
                  Save
                </DefaultButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
