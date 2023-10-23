import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Iconify from 'src/components/iconify';
import { visuallyHidden } from './utils';

export default function UserTableHead({
  order,
  orderBy,
  rowCount,
  headLabel,
  numSelected,
  onRequestSort,
  onSelectAllClick,
}) {
  const onSort = (property) => (event) => {
    onRequestSort(event, property);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [filterOptions, setFilterOptions] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    
    if (selectedFilter === 'Sort A to Z' && filterValue !== 'Sort A to Z') {
      onRequestSort(null, 'asc'); // Sort A to Z
    } else if (selectedFilter === 'Sort Z to A' && filterValue !== 'Sort Z to A') {
      onRequestSort(null, 'desc'); // Sort Z to A
    } else {
      // Handle other filter options or no filter selected
      // You can add custom logic here
    }
  
    setFilterValue(selectedFilter);
    closeFilter();
  };
  

  const openFilter = (event, options) => {
    setFilterOptions(options);
    setAnchorEl(event.currentTarget);
    setFilterOpen(true);
  };

  const closeFilter = () => {
    setAnchorEl(null);
    setFilterOpen(false);
  };

  return (
    <TableHead >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={onSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
            <IconButton onClick={(e) => openFilter(e, ['Sort A to Z', 'Sort Z to A'])}>
            <Iconify icon="system-uicons:filter" />
            </IconButton>
            <Popover
              open={filterOpen}
              anchorEl={anchorEl}
              onClose={closeFilter}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <List>
                {filterOptions.map((option) => (
                  <ListItem
                    key={option}
                    button
                    onClick={() => {
                      handleFilterChange({ target: { value: option } });
                      closeFilter();
                    }}
                  >
                    <ListItemText primary={option} />
                  </ListItem>
                ))}
              </List>
            </Popover>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

UserTableHead.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
  headLabel: PropTypes.array,
  numSelected: PropTypes.number,
  onRequestSort: PropTypes.func,
  onSelectAllClick: PropTypes.func,
};
