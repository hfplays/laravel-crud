import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
interface Anggota {
    id: number;
    nomor_anggota: string;
    nama: string;
    email: string | null;
    no_hp: string | null;
    alamat: string | null;
    tanggal_bergabung: string | null;
    status: 'aktif' | 'nonaktif';
}
interface Props {
    anggota: Anggota;
}
export default function Edit({ anggota }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        nomor_anggota: anggota.nomor_anggota ?? '',
        nama: anggota.nama ?? '',
        email: anggota.email ?? '',
        no_hp: anggota.no_hp ?? '',
        alamat: anggota.alamat ?? '',
        tanggal_bergabung: anggota.tanggal_bergabung ?? '',
        status: anggota.status ?? 'aktif',
    });
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/anggota/${anggota.id}`);
    };
    return (
        <>
            {' '}
            <Head title="Edit Anggota" />{' '}
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                {' '}
                <Card>
                    {' '}
                    <CardHeader>
                        {' '}
                        <div className="flex items-center gap-3">
                            {' '}
                            <Button variant="outline" size="icon" asChild>
                                <Link href="/anggota">
                                    <ArrowLeft className="h-4 w-4" />{' '}
                                </Link>
                            </Button>{' '}
                            <div>
                                {' '}
                                <CardTitle>Edit Anggota</CardTitle>{' '}
                                <p className="text-muted-foreground mt-1 text-sm">
                                    {' '}
                                    Perbarui data anggota{' '}
                                </p>{' '}
                            </div>{' '}
                        </div>{' '}
                    </CardHeader>{' '}
                    <CardContent>
                        {' '}
                        <form onSubmit={submit} className="space-y-5">
                            {' '}
                            {/* Nomor Anggota */}{' '}
                            <div className="grid gap-2">
                                {' '}
                                <Label htmlFor="nomor_anggota">
                                    {' '}
                                    Nomor Anggota{' '}
                                </Label>{' '}
                                <Input
                                    id="nomor_anggota"
                                    value={data.nomor_anggota}
                                    onChange={(e) =>
                                        setData('nomor_anggota', e.target.value)
                                    }
                                    placeholder="Contoh: AGT-0001"
                                />{' '}
                                {errors.nomor_anggota && (
                                    <p className="text-sm text-red-500">
                                        {' '}
                                        {errors.nomor_anggota}{' '}
                                    </p>
                                )}{' '}
                            </div>{' '}
                            {/* Nama */}{' '}
                            <div className="grid gap-2">
                                {' '}
                                <Label htmlFor="nama">Nama</Label>{' '}
                                <Input
                                    id="nama"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData('nama', e.target.value)
                                    }
                                    placeholder="Nama lengkap"
                                />{' '}
                                {errors.nama && (
                                    <p className="text-sm text-red-500">
                                        {' '}
                                        {errors.nama}{' '}
                                    </p>
                                )}{' '}
                            </div>{' '}
                            {/* Email */}{' '}
                            <div className="grid gap-2">
                                {' '}
                                <Label htmlFor="email">Email</Label>{' '}
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    placeholder="email@example.com"
                                />{' '}
                                {errors.email && (
                                    <p className="text-sm text-red-500">
                                        {' '}
                                        {errors.email}{' '}
                                    </p>
                                )}{' '}
                            </div>{' '}
                            {/* No HP */}{' '}
                            <div className="grid gap-2">
                                {' '}
                                <Label htmlFor="no_hp">No HP</Label>{' '}
                                <Input
                                    id="no_hp"
                                    value={data.no_hp}
                                    onChange={(e) =>
                                        setData('no_hp', e.target.value)
                                    }
                                    placeholder="08xxxxxxxxxx"
                                />{' '}
                                {errors.no_hp && (
                                    <p className="text-sm text-red-500">
                                        {' '}
                                        {errors.no_hp}{' '}
                                    </p>
                                )}{' '}
                            </div>{' '}
                            {/* Alamat */}{' '}
                            <div className="grid gap-2">
                                {' '}
                                <Label htmlFor="alamat">Alamat</Label>{' '}
                                <Textarea
                                    id="alamat"
                                    value={data.alamat}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLTextAreaElement>,
                                    ) => setData('alamat', e.target.value)}
                                    placeholder="Alamat lengkap"
                                />{' '}
                                {errors.alamat && (
                                    <p className="text-sm text-red-500">
                                        {' '}
                                        {errors.alamat}{' '}
                                    </p>
                                )}{' '}
                            </div>{' '}
                            {/* Tanggal Bergabung */}{' '}
                            <div className="grid gap-2">
                                {' '}
                                <Label htmlFor="tanggal_bergabung">
                                    {' '}
                                    Tanggal Bergabung{' '}
                                </Label>{' '}
                                <Input
                                    id="tanggal_bergabung"
                                    type="date"
                                    value={data.tanggal_bergabung}
                                    onChange={(e) =>
                                        setData(
                                            'tanggal_bergabung',
                                            e.target.value,
                                        )
                                    }
                                />{' '}
                                {errors.tanggal_bergabung && (
                                    <p className="text-sm text-red-500">
                                        {' '}
                                        {errors.tanggal_bergabung}{' '}
                                    </p>
                                )}{' '}
                            </div>{' '}
                            {/* Status */}{' '}
                            <div className="grid gap-2">
                                {' '}
                                <Label htmlFor="status">Status</Label>{' '}
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLSelectElement>,
                                    ) =>
                                        setData(
                                            'status',
                                            e.target.value as
                                            | 'aktif'
                                            | 'nonaktif',
                                        )
                                    }
                                    className="border-input bg-background textsm h-10 rounded-md border px-3"
                                >
                                    {' '}
                                    <option value="aktif">Aktif</option>{' '}
                                    <option value="nonaktif">
                                        {' '}
                                        Nonaktif{' '}
                                    </option>{' '}
                                </select>{' '}
                                {errors.status && (
                                    <p className="text-sm text-red-500">
                                        {' '}
                                        {errors.status}{' '}
                                    </p>
                                )}{' '}
                            </div>{' '}
                            {/* Button */}{' '}
                            <div className="flex justify-end gap-2">
                                {' '}
                                <Button type="button" variant="outline" asChild>
                                    <Link href="/anggota">Batal</Link>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {' '}
                                    {processing
                                        ? 'Menyimpan...'
                                        : 'Update Anggota'}{' '}
                                </Button>{' '}
                            </div>{' '}
                        </form>{' '}
                    </CardContent>{' '}
                </Card>{' '}
            </div>{' '}
        </>
    );
}
