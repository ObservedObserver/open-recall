// Copyright (C) 2023 observedobserver
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { RadioGroup } from "@headlessui/react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
export interface IRadioCardOption {
    label: string;
    key: string;
    value: any;
}
interface RadioCardGroupProps {
    options: IRadioCardOption[];
    value: any;
    onChange: (key: string, option: IRadioCardOption) => void;
}
export default function RadioCardGroup(props: RadioCardGroupProps) {
    const { options, value, onChange } = props;
    const selectedOption = options.find((o) => o.value === value);

    return (
        <div>
            <RadioGroup
                value={selectedOption}
                onChange={(op: IRadioCardOption) => {
                    if (op) {
                        onChange(op.key, op);
                    }
                }}
                className="mt-2"
            >
                <RadioGroup.Label className="sr-only">
                    {" "}
                    Choose a memory option{" "}
                </RadioGroup.Label>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {options.map((option) => (
                        <RadioGroup.Option
                            key={option.key}
                            value={option}
                            className={({ active, checked }) =>
                                classNames(
                                    active
                                        ? "ring-2 ring-offset-2 ring-blue-400"
                                        : "",
                                    checked
                                        ? "border-blue-400 text-white ring-2 ring-offset-2 ring-sky-40 border-transparent bg-blue-400"
                                        : "border-gray-300 text-gray-200",
                                    "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                                )
                            }
                        >
                            <RadioGroup.Label as="span">
                                {option.label}
                            </RadioGroup.Label>
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
}
