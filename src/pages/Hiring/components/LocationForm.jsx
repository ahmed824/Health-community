import React from "react";
import CountrySelect from "@/pages/Profile/components/CountrySelect"; 
import CitySelect from "@/pages/Profile/components/CitySelect";  
import Input from "../../../../components/ui/Input";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";

export default function LocationForm({ form, setForm, countries, filteredCities }) {
  return (
    <>
      <CountrySelect
        value={form.country}
        onChange={(val) => setForm((prev) => ({ ...prev, country: val, city: "" }))}
        countries={countries}
      />
      <CitySelect
        value={form.city}
        onChange={(val) => setForm((prev) => ({ ...prev, city: val }))}
        cities={filteredCities}
      />
      <Input
        label="Location"
        name="location"
        value={form.location}
        onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
        placeholder="Enter your location"
        icon={<FaMapMarkerAlt />}
      />
      <Input
        label="Nationality (optional)"
        name="nationality"
        value={form.nationality}
        onChange={(e) => setForm((prev) => ({ ...prev, nationality: e.target.value }))}
        placeholder="Enter your nationality"
        icon={<GiEarthAfricaEurope />}
      />
    </>
  );
} 