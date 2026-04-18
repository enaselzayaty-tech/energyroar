import './globals.css';

export const metadata = {
title: 'ROAR – Return On Asset Resources',
description: 'Where natural resources become transactions',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
