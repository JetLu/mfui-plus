import { Option } from '../mf-select';

const _Option = Option;
_Option.install = app => {
    app.component(_Option.name, _Option);
};

export default _Option;
