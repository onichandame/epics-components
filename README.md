# EPICS Components

This library provides standardized components for control systems based on EPICS. Check [this](https://onichandame.github.io/epics-components) for detailed docs.

# Author

[onichandame](https://github.com/onichandame)

# Usage

```bash
yarn add epics-components
```

```typescript
import {
  RealTimeLineChart,
  BinaryIndicator,
  TextIndicator
} from 'epics-components'

const Chart = () => (
  <RealTimeLineChart
    label={'chart'}
    data={[
      {
        x: 1,
        y1: 2,
        y2: 3
      },
      {
        x: 2,
        y1: 3,
        y2: 4
      }
    ]}
    x={'x'}
    y={['y1', 'y2']}
  />
)
const NormalIndicator = () => (
  <BinaryIndicator label={'normal'} value={true}/>
)
const ErrorIndicator = () => (
  <BinaryIndicator label={'error'} value={false}/>
)
const TextField = () => (
  <TextIndicator label={'text'} value={'text'}/>
)
```

# License

[MIT](https://opensource.org/licenses/MIT)
