import React from "react";
import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";

const SearchBar = ({ city, setCity, fetchWeather, fetchSuggestions, suggestions, loading, isMobile }) => {
  return (
    <Box display="flex" gap={2} flexDirection={isMobile ? "column" : "row"} mb={4}>
      <Autocomplete
        freeSolo
        fullWidth
        loading={loading}
        options={suggestions.map((s) => `${s.name}, ${s.country}`)}
        onInputChange={(e, value) => {
          setCity(value);
          fetchSuggestions(value);
        }}
        onChange={(e, value) => value && fetchWeather(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search City"
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && <CircularProgress color="inherit" size={18} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
            sx={{
              input: { color: "#242424" },
              label: { color: "gray" },
              "& .MuiOutlinedInput-root": {
                background: "rgba(255,255,255,0.1)",
                borderRadius: 2,
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default SearchBar;
