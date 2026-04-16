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
import { useContactInquiry } from '../context/ContactInquiryContext';

const TEXT = {
  'zh-CN': {
    title: '联系我们',
    subtitle: '填写以下信息，我们将尽快与您联系',
    name: '姓名',
    namePlaceholder: '请输入您的姓名',
    contact: '联系方式',
    contactPlaceholder: '邮箱 / 手机号 / 微信号',
    content: '合作内容',
    contentPlaceholder: '请描述您希望合作或咨询的内容…',
    submit: '提交',
    submitting: '提交中…',
    successTitle: '提交成功！',
    successMsg: '感谢您的留言！我们将尽快与您联系。',
    errorMsg: '提交失败，请稍后重试或直接联系 tot@alexzhenwu.com',
    required: '此项必填',
    close: '关闭',
  },
  'zh-TW': {
    title: '聯繫我們',
    subtitle: '填寫以下資訊，我們將盡快與您聯繫',
    name: '姓名',
    namePlaceholder: '請輸入您的姓名',
    contact: '聯繫方式',
    contactPlaceholder: '郵箱 / 手機號 / 微信號',
    content: '合作內容',
    contentPlaceholder: '請描述您希望合作或諮詢的內容…',
    submit: '提交',
    submitting: '提交中…',
    successTitle: '提交成功！',
    successMsg: '感謝您的留言！我們將盡快與您聯繫。',
    errorMsg: '提交失敗，請稍後重試或直接聯繫 tot@alexzhenwu.com',
    required: '此項必填',
    close: '關閉',
  },
  en: {
    title: 'Contact Us',
    subtitle: "Fill in your details and we'll get back to you as soon as possible.",
    name: 'Name',
    namePlaceholder: 'Enter your name',
    contact: 'Contact Info',
    contactPlaceholder: 'Email / Phone / WeChat',
    content: 'Collaboration Details',
    contentPlaceholder: 'Please describe the collaboration or inquiry…',
    submit: 'Submit',
    submitting: 'Submitting…',
    successTitle: 'Message Sent!',
    successMsg: "Thank you for reaching out! We'll get back to you shortly.",
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

export default function ContactInquiryModal() {
  const { isOpen, close } = useContactInquiry();
  const { language } = useLanguage();
  const text = TEXT[language] || TEXT['zh-CN'];

  const [form, setForm] = useState({ name: '', contact: '', content: '' });
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
    if (!form.contact.trim()) newErrors.contact = text.required;
    if (!form.content.trim()) newErrors.content = text.required;
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
              ? 'Collaboration Inquiry — Theater of Tomorrow'
              : '合作咨询 — 明日剧场',
          姓名: form.name,
          联系方式: form.contact,
          合作内容: form.content,
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
      setForm({ name: '', contact: '', content: '' });
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
              <Field label={text.name} error={errors.name}>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={text.namePlaceholder}
                  style={inputStyle(!!errors.name)}
                />
              </Field>

              <Field label={text.contact} error={errors.contact}>
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder={text.contactPlaceholder}
                  style={inputStyle(!!errors.contact)}
                />
              </Field>

              <Field label={text.content} error={errors.content}>
                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  placeholder={text.contentPlaceholder}
                  rows={4}
                  style={{ ...inputStyle(!!errors.content), resize: 'vertical' }}
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
