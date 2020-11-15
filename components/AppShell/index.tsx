import { ReactNode } from 'react';
import { Navbar } from '../Navbar';

type Prop = {
    children?: ReactNode;
};
export function AppShell({ children }: Prop) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
