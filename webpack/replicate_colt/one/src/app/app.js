import {AlertService} from './alert.service'
import {ComponentService} from './component.service'
import {parseInputs} from './utils/parse-inputs'
import { inputsAreValid } from './utils/inputs-are-valid';

const alertService = new AlertService();
const componentService = new ComponentService();

export const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};
//run(alertService, componentService);
