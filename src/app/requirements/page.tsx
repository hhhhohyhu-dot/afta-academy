import Link from "next/link";

export default function RequirementsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-950 to-slate-900 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-orange-500">
          شروط التسجيل
        </h1>

        <p className="mt-4 text-gray-300 text-xl">
          AFTA Academy Meknes
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-8">

        {/* شروط التسجيل */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            📋 شروط التسجيل
          </h2>

          <ul className="space-y-5 text-lg leading-8">

            <li>✅ العمر بين <strong>17 و29 سنة</strong></li>

            <li>✅ المستوى الدراسي: <strong>Bac أو Niveau Bac</strong></li>

            <li>
              ✅ الطول:
              <br />
              • الإناث: 1.57m على الأقل
              <br />
              • الذكور: 1.60m على الأقل
            </li>

            <li className="text-gray-400">
              (شرط الطول يخص فقط شعبة مضيف الطيران)
            </li>

          </ul>

        </div>

        {/* التسجيل القبلي */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            📝 معلومات التسجيل القبلي
          </h2>

          <ul className="space-y-4 text-lg">

            <li>• الاسم والنسب</li>

            <li>• السن</li>

            <li>• المستوى الدراسي</li>

            <li>• المدينة</li>

            <li>• رقم الهاتف</li>

          </ul>

        </div>

        {/* المصاريف */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            💰 مصاريف الدراسة
          </h2>

          <ul className="space-y-5 text-lg">

            <li>
              التسجيل واللباس الموحد:
              <strong> 3000 - 4000 DH</strong>
            </li>

            <li>
              وكيل أسفار:
              <strong> 1700 DH / شهر</strong>
            </li>

            <li>
              مضيف طيران:
              <strong> 2200 DH / شهر</strong>
            </li>

          </ul>

        </div>

        {/* المنحة */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            🎓 المنحة
          </h2>

          <p className="text-lg leading-9">
            يمكن الاستفادة من منحة تصل إلى
            <span className="text-orange-400 font-bold">
              {" "}8000 درهم{" "}
            </span>
            وفق الشروط المحددة.
          </p>

        </div>

      </div>

      {/* العنوان */}
      <section className="max-w-6xl mx-auto px-6 pb-12">

        <div className="bg-orange-500 rounded-3xl p-10 text-center text-white">

          <h2 className="text-3xl font-bold mb-6">
            📍 عنوان الأكاديمية
          </h2>

          <p className="text-xl leading-10">

            حي الزنقة

            <br />

            شارع الجيش الملكي

            <br />

            زنقة قسطنطينية

            <br />

            مقابل محطة الساتيام

            <br />

            مكناس

          </p>

        </div>

      </section>

      {/* زر التسجيل */}
      <section className="pb-20 text-center">

        <Link
          href="/register"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-xl font-bold shadow-2xl"
        >
          سجل الآن
        </Link>

      </section>

    </main>
  );
}