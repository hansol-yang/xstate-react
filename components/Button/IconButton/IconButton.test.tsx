import { fireEvent, render } from '@testing-library/react';
import { IconButton } from '.';

import { ReactComponent as IcoLogin } from '../../../public/icons/login-24px.svg';

import '@testing-library/jest-dom/extend-expect';

describe('IconButton', () => {
    test('calls "onClick" callback, if "IconButton" has been clicked', () => {
        const onClickCallback = jest.fn();
        const { getByRole } = render(
            <IconButton Icon={IcoLogin} onClick={onClickCallback} />
        );

        fireEvent.click(getByRole('button'));

        expect(onClickCallback).toHaveBeenCalledTimes(1);
    });
});
