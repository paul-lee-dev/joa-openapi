import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { Switch } from '@headlessui/react'
import Table from '@/components/table';

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

const BankCreate = () => {
  return (
    <Table></Table>
  );
};

export default BankCreate;
