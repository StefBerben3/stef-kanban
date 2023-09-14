import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { Fragment } from "react";
import { useUsercontrollerGetUsers } from "../api/endpoints/kanban";
import { CardUpdate } from "../api/model";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ListboxDropdown({
  data,
  onChange,
}: {
  data: CardUpdate;
  onChange: (card: CardUpdate) => void;
}) {
  const { data: users } = useUsercontrollerGetUsers();

  return (
    <div className="mb-4">
      <Listbox
        value={data.user}
        onChange={(value) => {
          if (value && value.id) {
            onChange({
              ...data,
              user: value,
            });
          } else {
            onChange({
              ...data,
              user: {
                id: null,
                name: "",
                lastname: "",
              },
            });
          }
        }}
      >
        {({ open }: { open: boolean }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              Assigned to
            </Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span className="block truncate">
                  {data.user && data.user.id ? data.user.name : "Create user"}
                </span>

                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {(users ?? []).map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }: { active: boolean }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-8 pr-4"
                        )
                      }
                      value={person}
                    >
                      {({
                        selected,
                        active,
                      }: {
                        selected: boolean;
                        active: boolean;
                      }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {person.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                  <Listbox.Option
                    className={({ active }: { active: boolean }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-8 pr-4"
                      )
                    }
                    value={{
                      id: null,
                      name: "",
                      lastname: "",
                    }}
                  >
                    <span className="block truncate">Create User</span>
                  </Listbox.Option>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      {data.user.id === null && (
        <>
          <div className="mb-4 pt-4">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Name"
              value={data.user?.name ?? ""}
              onChange={(e) =>
                onChange({
                  ...data,
                  user: {
                    ...data.user,
                    id: null,
                    name: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="field2">Lastname</label>
            <input
              id="lastname"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Lastname"
              value={data.user?.lastname ?? ""}
              onChange={(e) =>
                onChange({
                  ...data,
                  user: {
                    ...data.user,
                    id: null,
                    lastname: e.target.value,
                  },
                })
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
