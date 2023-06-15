import { Card, Grid, styled, useTheme, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MUIDataTable from 'mui-datatables';
import { Fragment } from 'react';
import { Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';
import { SimpleCard } from 'app/components';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
const Ul = styled('ul')({
  listStyle: 'none',
  display: 'inline-block',
});
const Li = styled('li')({
  display: 'inline',
  marginRight: '2px',
});
const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

const columns = [
  {
    name: 'code',
    label: 'Code',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'facility',
    label: 'Facility',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'county',
    label: 'County',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'subcounty',
    label: 'Sub-County',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'partner',
    label: 'Partner',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'docket',
    label: 'Docket',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'progress',
    label: 'Progress',
    options: {
      filter: true,
      sort: false,
      download: false,
      customBodyRender: (value) => (
        //   const cellData = data[roIndex][dataindex];
        <Tooltip
          style={{ background: red }}
          disableTouchListener
          placement="bottom"
          title={'the percent means the quantity of data already handled'}
          followCursor
        >
          <span>{value}</span>
        </Tooltip>
      ),
    },
  },
  {
    name: 'status',
    label: 'Status',
    options: {
      filter: true,
      sort: false,
      // Custom cell rendering function
      customBodyRender: (value) => (
        <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{value}</div>
      ),
    },
  },
  {
    name: 'updated',
    label: 'Updated',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'action',
    label: '',
    options: {
      filter: false,
      sort: false,
      download: false,
    },
  },
];

const data = [
  {
    code: '12331',
    facility: 'Test Corp',
    partner: 'Test Corp',
    county: 'Yonkers',
    subcounty: 'NY',
    docket: 'CT',
    progress: <LinearProgressWithLabel value={0} />,
    status: 'Upload In Progress...',
    updated: new Date().toDateString(),
    action: (
      <StyledIconButton>
        <AddIcon />
      </StyledIconButton>
    ),
  },
  {
    code: '12331',
    facility: 'Test Corp',
    partner: 'Test Corp',
    county: 'Yonkers',
    subcounty: 'NY',
    docket: 'HTS',
    progress: <LinearProgressWithLabel value={44} />,
    status: 'Upload In Progress...',
    updated: new Date().toDateString(),
    action: (
      <StyledIconButton>
        <AddIcon />
      </StyledIconButton>
    ),
  },
  {
    code: '12330',
    facility: 'Test Corp',
    partner: 'Test Corp',
    county: 'Hartford',
    subcounty: 'CT',
    docket: 'PrEP',
    progress: <LinearProgressWithLabel value={90} color="error" />,
    status: 'Resend',
    updated: new Date().toDateString(),
    action: (
      <StyledIconButton>
        <AddIcon />
      </StyledIconButton>
    ),
  },
  {
    code: '13983',
    facility: 'Test Corp',
    partner: 'Test Corp',
    county: 'Dallas',
    subcounty: 'TX',
    docket: 'MNCH',
    progress: <LinearProgressWithLabel value={75} />,
    status: 'Queued For Processing',
    updated: new Date().toDateString(),
    action: (
      <StyledIconButton>
        <AddIcon />
      </StyledIconButton>
    ),
  },
  {
    code: '42331',
    facility: 'Test Corp',
    partner: 'Test Corp',
    subcounty: 'Tampa',
    county: 'FL',
    docket: 'CT',
    progress: <LinearProgressWithLabel value={100} color="success" />,
    status: 'Processed',
    updated: new Date().toDateString(),
    action: (
      <StyledIconButton>
        <AddIcon />
      </StyledIconButton>
    ),
  },
];

const options = {
  filterType: 'multiselect',
  selectableRows: 'none',
  downloadOptions: {
    filterOptions: {
      useDisplayedColumnsOnly: true,
      useDisplayedRowsOnly: true,
    },
  },
};
const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));
const CircularSpan = styled('span')({
  display: 'inline-block',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 'red',
  marginRight: '2px',
});
const Analytics = () => {
  return (
    <Fragment>
      <ContentBox className="analytics">
        <MUIDataTable title={'Profiles'} data={data} columns={columns} options={options} />
        <SimpleCard title="Legend">
          <div style={{ width: '100%' }}>
            <span style={{ marginRight: '8px' }}>
              <CircularSpan style={{ background: '#a7caed' }}></CircularSpan>
              <span>On-starting</span>
            </span>
            <span style={{ marginRight: '8px' }}>
              <CircularSpan style={{ background: '#1976d2' }}></CircularSpan>
              <span>On-going</span>
            </span>
            <span style={{ marginRight: '8px' }}>
              <CircularSpan style={{ background: '#FF3D57' }}></CircularSpan>
              <span>On-error</span>
            </span>
            <span style={{ marginRight: '8px' }}>
              <CircularSpan style={{ background: '#2e7d32' }}></CircularSpan>
              <span>On-succcess</span>
            </span>
          </div>
        </SimpleCard>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
