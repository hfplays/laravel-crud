import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nomor_anggota: '',
        nama: '',
        email: '',
        no_hp: '',
        alamat: '',
        tanggal_bergabung: '',
        status: 'aktif',
    });
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/anggota');
    };
    return (
        <>
            {' '}
            <Head title="Tambah Anggota" />{' '}
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
                            <CardTitle>Tambah Anggota</CardTitle>{' '}
                        </div>{' '}
                    </CardHeader>{' '}
                    <CardContent>
                        {' '}
                        <form onSubmit={submit} className="space-y-5">
                            {' '}
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
                            </div>{' '}
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
                            </div>{' '}
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
                            </div>{' '}
                            <div className="grid gap-2">
                                {' '}
                                <Label htmlFor="status">Status</Label>{' '}
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLSelectElement>,
                                    ) => setData('status', e.target.value)}
                                    className="border-input bg-background textsm h-10 rounded-md border px-3"
                                >
                                    {' '}
                                    <option value="aktif">Aktif</option>{' '}
                                    <option value="nonaktif">
                                        {' '}
                                        Nonaktif{' '}
                                    </option>{' '}
                                </select>{' '}
                            </div>{' '}
                            <div className="flex justify-end gap-2">
                                {' '}
                                <Button type="button" variant="outline" asChild>
                                    <Link href="/anggota">Batal</Link>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {' '}
                                    {processing
                                        ? 'Menyimpan...'
                                        : 'Simpan Anggota'}{' '}
                                </Button>{' '}
                            </div>{' '}
                        </form>{' '}
                    </CardContent>{' '}
                </Card>{' '}
            </div>{' '}
        </>
    );
}
