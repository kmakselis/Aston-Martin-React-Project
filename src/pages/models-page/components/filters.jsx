import React from 'react';
import { Divider } from '@mui/material';
import {
  AutoSelectField,
  RangeField,
  CheckboxGroupField,
} from '../../../components';
import FilterDrawer from './filter-drawer';

const drawerWidth = 280;
const MIN = 154750;
const MAX = 267948;

const models = [
  { id: '1', label: 'DB11' },
  { id: '2', label: 'Vantage' },
  { id: '3', label: 'DBX' },
  { id: '4', label: 'DBS' },
];

const colors = [
  { id: '1', label: 'Lunar White' },
  { id: '2', label: 'Jet Black' },
  { id: '3', label: 'Golden Saffron' },
  { id: '4', label: 'China Gray' },
  { id: '5', label: 'Onyx Black' },
  { id: '6', label: 'Minotaur Green' },
  { id: '7', label: 'Titanium Gray' },
  { id: '8', label: 'Marine Blue' },
  { id: '9', label: 'Contemporary' },
  { id: '10', label: 'Contemporary Minotaur Green' },
  { id: '11', label: 'Aston Martin Racing Green' },
];

const engines = [
  { id: '1', label: '4.0 L V8 Twin Turbo' },
  { id: '2', label: '4.0 L V8 Twin Turbo + 65.0-kWh battery' },
];

const Filters = () => {
  const [priceRange, setPriceRange] = React.useState([MIN, MAX]);
  const [selectedModel, setSelectedModels] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedEngine, setSelectedEngine] = React.useState([]);

  return (
    <FilterDrawer drawerWidth={drawerWidth}>
      <RangeField
        label="Kaina"
        value={priceRange}
        onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
        min={MIN}
        max={MAX}
      />

      <Divider sx={{ my: 2 }} />

      <CheckboxGroupField
        label="Modeliai"
        options={models}
        value={selectedModel}
        onChange={(_, newMaterialTypes) => setSelectedModels(newMaterialTypes)}
      />

      <Divider sx={{ my: 2 }} />

      <CheckboxGroupField
        label="Variklis"
        options={engines}
        value={selectedEngine}
        onChange={(_, newEngine) => setSelectedEngine(newEngine)}
      />

      <Divider sx={{ my: 2 }} />

      <AutoSelectField
        options={colors}
        value={selectedColors}
        onChange={(_, newColor) => setSelectedColors(newColor)}
      />
    </FilterDrawer>
  );
};

export default Filters;
