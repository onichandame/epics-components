import React, { FC, useMemo, ReactNode, ComponentProps } from 'react'
import { generate } from 'randomstring'
import {
  Stepper as MST,
  Step,
  StepLabel,
  StepContent
} from '@material-ui/core'

type Status = 'standby'|'done'|'error'|'doing';

type StepProps={
  label: ReactNode;
  status: Status;
  desc?: ReactNode | Map<Status, ReactNode>;
}

type Props={
  steps: StepProps[];
} & Omit<ComponentProps<typeof MST>, 'children'>

export const Stepper: FC<Props> = ({ steps, ...other }: Props) => {
  const activeStep = useMemo<number>((): number => {
    let result = -1
    steps.forEach((step, index) => {
      if (step.status === 'doing') { result = index }
    })
    return result
  }, [steps])
  return (
    <MST activeStep={activeStep} {...other}>
      {
        steps.map(({ label, status, desc }) => (
          <Step key={`stepper-step-${generate({ length: 10 })}`} completed={status === 'done'}>
            <StepLabel error={status === 'error'}>{label}</StepLabel>
            <StepContent>
              {desc instanceof Map ? desc.get(status) : desc}
            </StepContent>
          </Step>
        ))
      }
    </MST>
  )
}
