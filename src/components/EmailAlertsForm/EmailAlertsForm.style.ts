import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MuiFormGroup from '@material-ui/core/FormGroup';
import { COLOR_MAP } from 'common/colors';
import { BaseButton } from 'components/Button';
import MuiCheckbox from '@material-ui/core/Checkbox';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
import { Paragraph } from 'components/Markdown';

export const StyledForm = styled.form``;

const fieldsetStyle = {
  borderRadius: '4px 0 0 4px',
};

const StyledTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': fieldsetStyle,
      '&:hover fieldset': fieldsetStyle,
      '&:Mui-focused fieldset': fieldsetStyle,
    },
  },
})(TextField);

export const EmailTextField = styled(StyledTextField).attrs(props => ({
  variant: 'outlined',
}))`
  width: 100%;

  & label.Mui-focused {
    color: ${COLOR_MAP.GRAY_BODY_COPY};
  }
`;

export const StyledButton = styled(BaseButton).attrs(props => ({
  variant: 'contained',
  disableElevation: true,
}))`
  min-width: 90px;
  background-color: ${COLOR_MAP.BLUE};
  color: white;
  border-radius: 0 4px 4px 0;
`;

export const EmailFieldGroup = styled.div`
  display: flex;

  & > * {
    flex: 1 1 auto;
  }
`;

export const StyledFormGroup = styled(MuiFormGroup)`
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;

export const StyledFormControlLabel = styled(MuiFormControlLabel)`
  align-items: flex-start;

  .MuiButtonBase-root.MuiIconButton-root {
    padding-top: 0;
  }
`;

export const StyledCheckboxLabel = styled(Paragraph)`
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 0;
`;

export const StyledCheckbox = styled(MuiCheckbox).attrs(props => ({
  disableRipple: true,
  disableFocusRipple: true,
}))`
  .MuiCheckbox-root {
    padding-top: 0;
  }

  &.Mui-focusVisible .MuiIconButton-label {
    outline: rgb(0, 95, 204) 1px auto;
  }

  svg {
    color: ${COLOR_MAP.BLUE};
  }
`;

export const AlertsInfoBox = styled.div`
  display: flex;
  padding: 12px;
  background: rgba(0, 191, 234, 0.1);
  border: 1px solid #00bfea;
  border-radius: 4px;

  & > * {
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const AlertsInfoBoxIcon = styled.div`
  flex: 0 0 auto;
  min-width: 24px;
  border: dashed 1px black;
`;

export const AlertsInfoBoxCopy = styled(Paragraph)`
  flex: 1 0 fill;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.4;
  color: black;
`;
