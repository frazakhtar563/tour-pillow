import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const steps = [
    {
        label: `M&M'S World New York`,
        description: `Stop 1 - 7th Ave & W 48th St`,
    },
    {
        label: `
        W 42nd St and Broadway`,
        description:
            `**Closed until further notice** Stop 2 - Times Square East`,
    },
    {
        label: `5th Avenue & West 32nd Street`,
        description: `Stop 3 - Empire State Building / KoreaTown ( (in front of CVS Pharmacy).`,
    },
    {
        label: `5th Ave & W 23rd St`,
        description: `Stop 4 - Flatiron District (in front of Eisenbergs Sandwich Shop)`,
    },
    {
        label: `West Broadway & Spring Street`,
        description: `Stop 5 - SoHo (in front of the Nike Store)`,
    },
    {
        label: `100 Lafayette St`,
        description: `Stop 6 - Chinatown / Little Italy (near corner with Walker Street)`,
    },
    {
        label: `Park Row & Beekman St`,
        description: `Stop 7 - Brooklyn Bridge (across from 33 Park Row)`,
    },
    {
        label: `SAMC360`,
        description: `Stop 8 - Wall Street / Charging Bull (Southwest corner near Rector St)`,
    },
    {
        label: `State St/Bridge St`,
        description: `Stop 9 - Statue of Liberty / Battery Park (in front of the 1 Train Subway Entrance)`,
    },
    {
        label: `Circle Line Sightseeing Cruises`,
        description: `Stop 10 - 12th Ave & 40th St (opposite Pier 81)`,
    },
];

export default function VerticalStepper() {


    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper orientation="vertical" activeStep={-1}  >
                {steps.map((step) => {
                    return (
                        <Step expanded={true}>
                            <StepLabel>
                                <Typography style={{ fontSize: "1 rem", fontWeight: "600", color: "#2a2d32" }}>{step.label}</Typography>
                            </StepLabel>
                            <StepContent >
                                <Typography>{step.description}</Typography>
                            </StepContent>
                        </Step>
                    )
                })}
            </Stepper>

        </Box>
    );
}