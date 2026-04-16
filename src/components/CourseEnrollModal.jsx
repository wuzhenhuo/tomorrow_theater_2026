import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCourseEnroll } from '../context/CourseEnrollContext';

const TEXT = {
  'zh-CN': {
    title: '报名课程',
    subtitle: '填写以下信息，我们的课程顾问将尽快与您联系',
    name: '姓名',
    namePlaceholder: '请输入您的姓名',
    age: '年龄',
    agePlaceholder: '请输入您的年龄',
    courseCategory: '报名课程类别',
    courseOptions: [
      { value: '', label: '请选择课程类别' },
      { value: '元宇宙数字表演课程（专业课）', label: '元宇宙数字表演课程（专业课）' },
      { value: '明日剧场·数字艺术设计课程（K12）', label: '明日剧场·数字艺术设计课程（K12）' },
    ],
    contact: '联系方式',
    contactPlaceholder: '邮箱 / 手机号 / 微信号',
    submit: '提交报名',
    submitting: '提交中…',
    successTitle: '报名成功！',
    successMsg: '感谢您的报名！我们的课程顾问将尽快与您联系。',
    errorMsg: '提交失败，请稍后重试或直接联系 tot@alexzhenwu.com',
    required: '此项必填',
    close: '关闭',
  },
  'zh-TW': {
    title: '報名課程',
    subtitle: '填寫以下資訊，我們的課程顧問將盡快與您聯繫',
    name: '姓名',
    namePlaceholder: '請輸入您的姓名',
    age: '年齡',
    agePlaceholder: '請輸入您的年齡',
    courseCategory: '報名課程類別',
    courseOptions: [
      { value: '', label: '請選擇課程類別' },
      { value: '元宇宙數字表演課程（專業課）', label: '元宇宙數字表演課程（專業課）' },
      { value: '明日劇場·數字藝術設計課程（K12）', label: '明日劇場·數字藝術設計課程（K12）' },
    ],
    contact: '聯繫方式',
    contactPlaceholder: '郵箱 / 手機號 / 微信號',
    submit: '提交報名',
    submitting: '提交中…',
    successTitle: '報名成功！',
    successMsg: '感謝您的報名！我們的課程顧問將盡快與您聯繫。',
    errorMsg: '提交失敗，請稍後重試或直接聯繫 tot@alexzhenwu.com',
    required: '此項必填',
    close: '關閉',
  },
  en: {
    title: 'Enroll in a Course',
    subtitle: "Fill in your details and our course advisor will contact you shortly.",
    name: 'Name',
    namePlaceholder: 'Enter your name',
    age: 'Age',
    agePlaceholder: 'Enter your age',
    courseCategory: 'Course Category',
    courseOptions: [
      { value: '', label: 'Select a course' },
      { value: 'Metaverse Digital Performance Course (Professional)', label: 'Metaverse Digital Performance Course (Professional)' },
      { value: 'Theater of Tomorrow · Digital Art Design Course (K-12)', label: 'Theater of Tomorrow · Digital Art Design Course (K-12)' },
    ],
    contact: 'Contact Info',
    contactPlaceholder: 'Email / Phone / WeChat',
    submit: 'Submit',
    submitting: 'Submitting…',
    successTitle: 'Enrollment Submitted!',
    successMsg: "Thank you! Our course advisor will reach out to you shortly.",
    errorMsg: 'Submission failed. Please try again or contact tot@alexzhenwu.com',
    required: 'This field is required',
    close: 'Close',
  },
};

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '9px 12px',
  borderRadius: 8,
  border: `1px solid ${hasError ? 'rgba(239,68,68,0.6)' : 'var(--border-strong)'}`,
  background: 'var(--bg-surface)',
  color: 'var(--text-primary)',
  fontSize: 14,
  outline: 'none',
  fontFamily: 'var(--font-ui)',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
});

function Field({ label, children, error }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)' }}>
        {label} <span style={{ color: 'var(--accent)' }}>*</span>
      </label>
      {children}
      {error && <span style={{ fontSize: 11, color: '#f87171' }}>{error}</span>}
    </div>
  );
}

export default function CourseEnrollModal() {
  const { isOpen, close } = useCourseEnroll();
  const { language } = useLanguage();
  const text = TEXT[language] || TEXT['zh-CN'];

  const [form, setForm] = useState({ name: '', age: '', course: '', contact: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = text.required;
    if (!form.age.trim()) newErrors.age = text.required;
    if (!form.course) newErrors.course = text.required;
    if (!form.contact.trim()) newErrors.contact = text.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const res = await fetch('https://formsubmit.co/ajax/tot@alexzhenwu.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject:
            language === 'en'
              ? 'Course Enrollment — Theater of Tomorrow'
              : '课程报名申请 — 明日剧场',
          姓名: form.name,
          年龄: form.age,
          报名课程: form.course,
          联系方式: form.contact,
          语言: language,
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    close();
    setTimeout(() => {
      setForm({ name: '', age: '', course: '', contact: '' });
      setErrors({});
      setStatus('idle');
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-accent)',
          color: 'var(--text-primary)',
          maxWidth: 480,
          width: 'calc(100% - 2rem)',
        }}
      >
        {status === 'success' ? (
          <div style={{ padding: '24px 0', textAlign: 'center' }}>
            <CheckCircle2
              size={52}
              style={{ color: 'var(--accent)', margin: '0 auto 16px', display: 'block' }}
            />
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{text.successTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 28, lineHeight: 1.6 }}>
              {text.successMsg}
            </p>
            <button className="btn btn-primary" onClick={handleClose}>
              {text.close}
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle style={{ color: 'var(--text-primary)', fontSize: 19 }}>
                {text.title}
              </DialogTitle>
              <DialogDescription style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
                {text.subtitle}
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 4 }}
            >
              {/* 姓名 */}
              <Field label={text.name} error={errors.name}>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={text.namePlaceholder}
                  style={inputStyle(!!errors.name)}
                />
              </Field>

              {/* 年龄 */}
              <Field label={text.age} error={errors.age}>
                <input
                  name="age"
                  type="number"
                  min="1"
                  max="120"
                  value={form.age}
                  onChange={handleChange}
                  placeholder={text.agePlaceholder}
                  style={inputStyle(!!errors.age)}
                />
              </Field>

              {/* 报名课程类别 */}
              <Field label={text.courseCategory} error={errors.course}>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  style={{
                    ...inputStyle(!!errors.course),
                    cursor: 'pointer',
                    appearance: 'auto',
                  }}
                >
                  {text.courseOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </Field>

              {/* 联系方式 */}
              <Field label={text.contact} error={errors.contact}>
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder={text.contactPlaceholder}
                  style={inputStyle(!!errors.contact)}
                />
              </Field>

              {status === 'error' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    padding: '10px 12px',
                    borderRadius: 8,
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    color: '#f87171',
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  <AlertCircle size={14} style={{ marginTop: 2, flexShrink: 0 }} />
                  {text.errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
                style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    {text.submitting}
                  </>
                ) : (
                  text.submit
                )}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
