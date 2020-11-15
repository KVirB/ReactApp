import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";
import TextField from '@material-ui/core/TextField';

function Google_maps({ isScriptLoaded, isScriptLoadSucceed }) {
  const [address, setAddress] = React.useState("");

  const handleChange = (value) => {
    setAddress(value)
  }

  

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <TextField
                
                label="Adress" 
                margin="normal" 
                variant="outlined" 
                margin="normal" 
                required 
                fullWidth 
                id="Adress" 
                name="Adress" 
                value={Google_maps} 
                autoFocus  
                {...getInputProps({
                  placeholder: "Enter Address...",
                })}
              />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#a83232", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI&libraries=places&callback=initMap`,
])(Google_maps);
