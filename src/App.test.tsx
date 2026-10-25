import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('switches to light mode from the navigation control', () => {
  const { container } = render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));

  expect(container.firstChild).toHaveClass('light-mode');
  expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
});

test('shows the Pulse app and source links', () => {
  render(<App />);

  expect(screen.getByText(/full-stack blood-pressure journal/i)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Pulse blood pressure journal dashboard preview' })).toBeInTheDocument();

  const sourceLink = screen.getByRole('link', { name: 'View Pulse on GitHub' });
  const liveLink = screen.getByRole('link', { name: 'Visit Pulse live website' });
  expect(sourceLink).toHaveAttribute(
    'href',
    'https://github.com/KhushiJaiswal09/BP-Monitoring-setup/tree/main/bp-monitoring'
  );
  expect(liveLink).toHaveAttribute('href', 'https://bp-monitoring-setup.vercel.app/');
  expect(sourceLink.parentElement).toHaveClass('project-links');
  expect(liveLink.parentElement).toBe(sourceLink.parentElement);
});

test('shows the current professional profile and downloadable résumé', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Hi, I’m Khushi Jaiswal/ })).toBeInTheDocument();
  screen.getAllByRole('link', { name: 'Download résumé' }).forEach((link) => {
    expect(link).toHaveAttribute('href', '/Khushi-Jaiswal.pdf');
  });
  expect(screen.getByText(/1\.5\+ years of experience/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Software Engineer', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Software Engineering Intern', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Technical Expertise' })).toBeInTheDocument();
  expect(screen.getByText('Frontend')).toBeInTheDocument();
  expect(screen.getByText('Backend')).toBeInTheDocument();
  expect(screen.getByText('Tools & Technologies')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /SRGP Institutional Web Platform website/ })).toHaveAttribute(
    'href',
    'http://srgp.in/'
  );
  expect(screen.getByRole('img', { name: 'SRGP Pharmacy College website homepage' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Computer lab featured on the SRGP College website' })).toBeInTheDocument();
  expect(screen.getByText('20+ client-side routes')).toBeInTheDocument();

  [
    'SRGP Institutional Web Platform',
    'Pulse',
    'Face Emotion Recognition',
    'Plantonia',
    'Web Clash',
  ].forEach((project) => {
    expect(screen.getByRole('heading', { name: project, level: 3 })).toBeInTheDocument();
  });

  expect(screen.queryByRole('heading', { name: 'Portfolio Maker', level: 3 })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'ExplorYaar', level: 3 })).not.toBeInTheDocument();

  [
    'B.Tech in Computer Science & Engineering',
    'Class XII · Physics, Chemistry & Mathematics',
    'Class X · S.S.C',
  ].forEach((qualification) => {
    expect(screen.getByRole('heading', { name: qualification, level: 3 })).toBeInTheDocument();
  });
  expect(document.querySelectorAll('.education-timeline-element')).toHaveLength(3);
  expect(screen.getByText('92%')).toBeInTheDocument();
  expect(screen.getByText('April 2020 – July 2021')).toBeInTheDocument();
  expect(screen.getByText('2018 – 2019')).toBeInTheDocument();
  expect(screen.getByText('GVSDP Academic Merit Scholarship · 50% tuition waiver')).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: 'Languages' })).toBeInTheDocument();
  expect(screen.getByText('English')).toBeInTheDocument();
  expect(screen.getByText('Hindi')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Hobbies' })).toBeInTheDocument();
  expect(screen.getByText('Travelling')).toBeInTheDocument();
  expect(screen.getByText('Gardening')).toBeInTheDocument();
  expect(screen.getByText('Running')).toBeInTheDocument();
  expect(screen.getByText('(still working on it!)')).toBeInTheDocument();
});
