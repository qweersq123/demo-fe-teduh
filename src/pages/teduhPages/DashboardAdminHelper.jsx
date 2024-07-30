import { Button } from "antd";
import ButtonDetailResponden from "./components/ButtonDetailResponden";

export const columnRespondens = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Tanggal',
        dataIndex: 'tanggal',
        key: 'tanggal',
    },
    {
        title: 'Jam Pra-Kuisioner',
        dataIndex: 'jamPraKuisioner',
        key: 'jamPraKuisioner',
        responsive: ['sm'],
    },
    {
        title: 'Jam Post-Kuisioner',
        dataIndex: 'jamPostKuisioner',
        key: 'jamPostKuisioner',
        responsive: ['sm'],
    },
    {
        title: 'Aksi',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <>
                <ButtonDetailResponden props={record} />
            </>
        ),
    },
];

export const dataRespondens = [
    {
        id: '1',
        name: 'Budi Bapkae',
        tanggal: '2024-05-15',
        jamPraKuisioner: '09:00',
        jamPostKuisioner: '10:00',
    },
    {
        id: '2',
        name: 'Ani Anakmalas',
        tanggal: '2024-05-15',
        jamPraKuisioner: '09:15',
        jamPostKuisioner: '10:30',
    },
    {
        id: '3',
        name: 'Cici Cepat',
        tanggal: '2024-05-15',
        jamPraKuisioner: '09:30',
        jamPostKuisioner: '10:45',
    },
    {
        id: '4',
        name: 'Doni Diamdiam',
        tanggal: '2024-05-15',
        jamPraKuisioner: '09:45',
        jamPostKuisioner: '11:00',
    },
    {
        id: '5',
        name: 'Eva Eksentrik',
        tanggal: '2024-05-15',
        jamPraKuisioner: '10:00',
        jamPostKuisioner: '11:15',
    },
    {
        id: '6',
        name: 'Fani Fleksibel',
        tanggal: '2024-05-15',
        jamPraKuisioner: '10:15',
        jamPostKuisioner: '11:30',
    },
    {
        id: '7',
        name: 'Gani Gagap',
        tanggal: '2024-05-15',
        jamPraKuisioner: '10:30',
        jamPostKuisioner: '11:45',
    },
    {
        id: '8',
        name: 'Hani Hangat',
        tanggal: '2024-05-15',
        jamPraKuisioner: '10:45',
        jamPostKuisioner: '12:00',
    },
    {
        id: '9',
        name: 'Ina Inovatif',
        tanggal: '2024-05-15',
        jamPraKuisioner: '11:00',
        jamPostKuisioner: '12:15',
    },
    {
        id: '10',
        name: 'Joni Jujur',
        tanggal: '2024-05-15',
        jamPraKuisioner: '11:15',
        jamPostKuisioner: '12:30',
    },
];
