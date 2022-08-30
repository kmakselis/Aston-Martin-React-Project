import React from 'react';
import { Divider } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import {
  AutoSelectField,
  RangeField,
  CheckboxGroupField,
} from '../../../components';
import FilterDrawer from './filter-drawer';
import ModelService from '../../../services/model-service';
import ColorService from '../../../services/color-service';
import EngineService from '../../../services/engine-service';

const drawerWidth = 280;
const MIN = 154750;
const MAX = 267948;

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [models, setModels] = React.useState([]);
  const [engines, setEngines] = React.useState([]);
  const [colors, setColors] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([MIN, MAX]);
  const [selectedModel, setSelectedModels] = React.useState([]);
  const [selectedEngine, setSelectedEngine] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState(null);

  const handlePriceRangeChange = (_, newPriceRange) => {
    const [min, max] = newPriceRange;
    searchParams.set('price_gte', min);
    searchParams.set('price_lte', max);
    setSearchParams(searchParams);
    setPriceRange(newPriceRange);
  };

  const handleColorChange = (_, newColors) => {
    setSelectedColors(newColors);
  };

  const handleModelChange = (_, newMaterialTypes) => {
    setSelectedModels(newMaterialTypes);
  };

  const handleEngineChange = (_, newEngines) => {
    setSelectedEngine(newEngines);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedModels, fetchedColors, fetchedEngines] = await Promise.all([
        ModelService.fetchAll(),
        ColorService.fetchAll(),
        EngineService.fetchAll(),
      ]);
      setModels(fetchedModels);
      setEngines(fetchedEngines);
      setColors(fetchedColors);
    })();
  }, []);

  return (
    <FilterDrawer drawerWidth={drawerWidth}>
      <RangeField
        label="Kaina"
        value={priceRange}
        onChange={handlePriceRangeChange}
        min={MIN}
        max={MAX}
      />

      <Divider sx={{ my: 2 }} />

      <CheckboxGroupField
        label="Modeliai"
        options={models}
        value={selectedModel}
        onChange={handleModelChange}
      />

      <Divider sx={{ my: 2 }} />

      <CheckboxGroupField
        label="Variklis"
        options={engines}
        value={selectedEngine}
        onChange={handleEngineChange}
      />

      <Divider sx={{ my: 2 }} />

      <AutoSelectField
        options={colors}
        value={selectedColors}
        onChange={handleColorChange}
      />
    </FilterDrawer>
  );
};

export default Filters;
