import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">

      <div className="max-w-6xl text-center space-y-8 bg-white p-10 rounded-4xl shadow-xl">
        <h1 className="text-5xl font-extrabold 
        text-indigo-900 tracking-tight">
          نظام إدارة الطلاب
        </h1>
        <p className="text-xl text-gray-600">
          مرحباً بك في لوحة التحكم. يمكنك إدارة الأقسام والطلاب والدورات التدريبية من هنا.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2
         gap-4 mt-8">
          <Link
            href="/department"
            className="group block p-6 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all transform 
            hover:-translate-y-1 shadow-lg"
          >
            <span className="text-xl font-bold">إدارة الأقسام</span>
            <p className="text-indigo-200 text-sm mt-2">إضافة، حذف، وتعديل أقسام الكلية</p>
          </Link>

          <div className="group block p-6 bg-white border-2 border-dashed border-gray-300 text-gray-400 rounded-xl 
          cursor-not-allowed">
            <span className="text-xl font-bold">إدارة الطلاب</span>
            <p className="text-gray-400 text-sm mt-2">قريباً...</p>
          </div>
        </div>
      </div>
    </main>
  );
}
